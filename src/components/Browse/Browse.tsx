import { MainHeaderContent } from '../MainHeaderContent'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { MainHeaderNavigation } from '../MainHeaderNavigation'
import { Switch, Route } from 'react-router-dom'
import { MainContent } from '../MainContent'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from '../../redux/store'
import { filterData } from '../../redux/AC'

const mainFooterContent = {
  title: 'Questions? Call',
  phoneNumber: '8-800-100-9668',
  links: [
    ['FAQ', 'Investor Relations', 'Privacy', 'Speed Test'],
    ['Help Center', 'Jobs', 'Cookie Preferences', 'Legal Notices'],
    ['Account', 'Ways to Watch', 'Corporate Information', 'Netflix Originals'],
    ['Media Center', 'Terms of Use', 'Contact Us'],
  ],
  copy: 'Netflix Russia',
}

type Props = {
  openModal: () => void
  isModalOpen: boolean
}

const Browse = ({ openModal, isModalOpen }: Props) => {
  const dispatch: AppDispatch = useDispatch()
  const formattedData = useSelector(
    (store: RootStore) => store.formattedData.value
  )
  const filteredData = useSelector(
    (store: RootStore) => store.filteredData.value
  )

  const search = (query?: string) => {
    if (!query) {
      dispatch(filterData())
      return
    }
    dispatch(filterData(query))
  }
  return (
    <>
      <Header
        bg={<img aria-hidden src="/images/misc/joker1.jpg" alt="" />}
        navigation={<MainHeaderNavigation search={search} />}>
        <MainHeaderContent openModal={openModal} />
      </Header>
      <main className="browse-main">
        <Switch>
          <Route exact path="/browse">
            {filteredData &&
              'films' in filteredData &&
              filteredData.films &&
              Object.keys(filteredData.films).filter(
                (key) => filteredData.films[key].length > 0
              ).length === 0 && (
                <h2 className="browse__warning">No Results Found</h2>
              )}
            <MainContent
              isModalOpen={isModalOpen}
              openModal={openModal}
              type="films"
              content={
                filteredData && 'films' in filteredData
                  ? filteredData.films
                  : 'films' in formattedData
                  ? formattedData.films
                  : undefined
              }
            />
          </Route>
          <Route path="/browse/films">
            {filteredData &&
              'films' in filteredData &&
              filteredData.films &&
              Object.keys(filteredData.films).filter(
                (key) => filteredData.films[key].length > 0
              ).length === 0 && (
                <h2 className="browse__warning">No Results Found</h2>
              )}
            <MainContent
              isModalOpen={isModalOpen}
              openModal={openModal}
              type="films"
              content={
                filteredData && 'films' in filteredData
                  ? filteredData.films
                  : 'films' in formattedData
                  ? formattedData.films
                  : undefined
              }
            />
          </Route>
          <Route path="/browse/series">
            {filteredData &&
              'series' in filteredData &&
              filteredData.series &&
              Object.keys(filteredData.series).filter(
                (key) => filteredData.series[key].length > 0
              ).length === 0 && (
                <h2 className="browse__warning">No Results Found</h2>
              )}
            <MainContent
              isModalOpen={isModalOpen}
              openModal={openModal}
              type="series"
              content={
                filteredData && 'series' in filteredData
                  ? filteredData.series
                  : 'series' in formattedData
                  ? formattedData.series
                  : undefined
              }
            />
          </Route>
        </Switch>
      </main>
      <Footer content={mainFooterContent} />
    </>
  )
}

export default Browse
