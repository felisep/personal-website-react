import './info_page.scss'
import Increase_Btn from '../components/increase_btn'

const InfoPage = () =>{
  return (
    <div className='info_container'>
      <p>Welcome to the information page</p>
      <div>
        <p>This is a button element created with function</p>
        <Increase_Btn></Increase_Btn>
      </div>
    </div>
  );
}
export default InfoPage;