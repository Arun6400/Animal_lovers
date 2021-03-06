import React ,{ Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios'
import Popup from './Popup'
import wallebyPho from './images/wallaby_icon.png'
import koalaPho from './images/koala_icon.png'
import wombatPho from './images/wombat_icon.png'

// this component display a list of animals and show their characterics to kids


class AnimalList extends Component {
    
    state = {
        pid: null,
      }

      componentDidMount(){
        axios.get('/api/get/allanimals')
        //.then(res => console.log(res.data))
        .then(res => this.setState({pid: res.data}))
        .catch(err => console.log(err))
      }

     render() {

        console.log(this.state)
        console.log(this.state.pid)
    
        return (
        <div >
            <div className='container '>
                <ScrollAnimation animateIn="fadeIn">
                    <div pt-5></div>
                    <div >
                        <h1 className=' kidtipshead pt-5'>Hey there want to be my friend ?</h1>
                    </div>
                </ScrollAnimation>


                <div className='container parent-text-space mt-5 mb-5 pb-5'>
                    <p className ='font-weight-bold m-4 kidtipsfont'>
                        Tap on my belly to know more !!
                    </p>  

                    <div className='row mt-5 mp-5'>
                            <div class="col-lg-4 col-md-4 col-12 mb-4 mt-3 pl-5">
                                <Popup img={wallebyPho} name='Wallaby' count='11,798' status='Endangered - Vulnerable' habitat='Wallabies generally prefer more remote areas which are wooded or rugged rather than open arid plains' des='Wallabies are small to medium sized animals whereby the largest can measure 6 feet (1.8 metres) in height from head to tail. Wallabies can weigh anywhere between 2 – 24 kilograms (4 – 53 pounds).'/>                          
                            </div>
                            
                            <div class="col-lg-4 col-md-4 col-12 mb-4">
                                <Popup img={koalaPho} name='Koala' count='10,260' status='Endangered - High risk' habitat='Eucalyptus forests, coastal regions and moist woodlands' des='Thick-set animals with thick, soft, wool-like ash-grey coloured coats with white underpants'/>                       
                            </div>

                            <div class="col-lg-4 col-md-4 col-12 mb-4"  >
                                <Popup img={wombatPho} name='Wombat' count='6,730' status='Endangered - Persecuted' habitat='Dig out burrows measuring 30 metres (100 feet) long' des='Wombats measure 0.7 – 1.2 metres (28 – 48 inches) in length, 35 centimetres high and weigh 15 – 35 kilograms (11 – 77 pounds). They have large heads, short, powerful legs with powerful claws, thick set, muscular bodies and rodent-like front teeth suitable for their burrowing way of life.'/>
                            </div>
                    </div> 
            
                </div>
                
            </div>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">

                    <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
                        <h1 class="text-white"  data-aos-delay="100">We are making the <strong>best </strong> for kids</h1>
                    </div>

                    <div class="col-lg-3 col-md-6 col-12"  data-aos-delay="200">
                        <h4 class="my-4">Contact Info</h4>

                        <p>
                        <a href="#">
                            <i class="fa fa-envelope mr-2 footer-icon"></i>
                            dearanimal@gmail.com
                        </a>
                        </p>

                    </div>

                    <div class="col-lg-4 col-md-6 col-12" data-aos-delay="300">
                        <h4 class="my-4">Copyright &copy; Black Panther</h4>
                    </div>

                    
                    </div>
                </div>
            </footer>
        </div>
    )}
  }

  export default AnimalList