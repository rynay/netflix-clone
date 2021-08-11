import { useEffect, createRef } from 'react'
import { FaPlus } from 'react-icons/fa'

type Props = {
  close: () => void
  content: TFilm | TSerial
  type: string
  openModal: () => void
}

export const Preview = ({ close, content, type, openModal }: Props) => {
  const ref = createRef<HTMLButtonElement>()
  useEffect(() => {
    if (!ref.current) return
    ref.current.focus()
  }, [ref])
  useEffect(() => {
    if (!ref.current) return
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, [content])
  return (
    <section onClick={(e) => e.stopPropagation()} className="preview">
      <img
        className="preview__background"
        src={`/images/${type}/${content.genre}/${content.slug}/large.jpg`}
        alt=""
      />
      <div className="preview__content">
        <h2 className="preview__title">{content.title}</h2>
        <p className="preview__description">{content.description}</p>
        <p className="preview__age" aria-label="minimum age">
          {content.maturity}+
        </p>
        <button
          onClick={openModal}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              openModal()
            }
          }}
          className="preview__play">
          Play
        </button>
      </div>
      <button
        onClick={close}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            close()
          }
        }}
        className="preview__close"
        aria-label="close popup"
        ref={ref}>
        <FaPlus />
      </button>
    </section>
  )
}
