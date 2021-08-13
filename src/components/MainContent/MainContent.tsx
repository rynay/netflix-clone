import { useEffect, useState, Fragment } from 'react'
import { Preview } from '../Preview'

type Props = {
  content?: TFormattedData['films'] | TFormattedData['series']
  type: 'films' | 'series'
  openModal: () => void
  isModalOpen: boolean
}

export const MainContent = ({
  content,
  type,
  openModal,
  isModalOpen,
}: Props) => {
  const [target, setTarget] = useState<TFilm | TSerial | {}>({})
  const close = () => setTarget({})
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) return
      if (e.key === 'Escape') {
        console.log('MainContent')
        setTarget({})
      }
    }
    const handleClick = () => {
      if (isModalOpen) return
      if ('id' in target) {
        setTarget({})
      }
    }
    document.body.addEventListener('keydown', handleKeyDown)
    document.body.addEventListener('click', handleClick)
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown)
      document.body.removeEventListener('click', handleClick)
    }
  }, [isModalOpen, target])
  return (
    <article className="mainContent">
      {content &&
        Object.keys(content).map((key) => (
          <Fragment key={key}>
            {content[key].length > 0 && (
              <section className="mainContent__slider">
                <h2 className="mainContent__title">{key}</h2>
                <div className="mainContent__itemsContainer">
                  {content[key].map((item) => (
                    <section
                      key={item.id}
                      onClick={(e) => e.stopPropagation()}
                      className={`mainContent__itemContainer ${
                        'id' in target && item.id === target.id
                          ? 'mainContent__itemContainer--open'
                          : ''
                      }`}>
                      <button
                        onClick={() => {
                          setTarget(item)
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            setTarget(item)
                          }
                        }}
                        className="mainContent__imageContainer">
                        <img
                          src={`/images/${type}/${item.genre}/${item.slug}/small.jpg`}
                          alt={item.title}
                        />
                      </button>
                      <div
                        onClick={() => {
                          setTarget(item)
                        }}
                        className="mainContent__description">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </section>
                  ))}
                </div>
                {'id' in target &&
                  content[key].some((item) => item.id === target.id) && (
                    <Preview
                      openModal={openModal}
                      type={type}
                      close={close}
                      content={target}
                    />
                  )}
              </section>
            )}
          </Fragment>
        ))}
    </article>
  )
}
