import { connect } from 'react-redux';
import { MainHeaderContent } from '../MainHeaderContent';
import { Header } from '../Header';
import { Footer } from '../Footer';

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
};
const Browse = ({ data }) => {
  return (
    <>
      <Header
        bg={<img aria-hidden src="/images/misc/joker1.jpg" alt="" />}
        navigation={<div>TODO</div>}>
        <MainHeaderContent />
      </Header>
      <main></main>
      <Footer content={mainFooterContent} />
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Browse);
