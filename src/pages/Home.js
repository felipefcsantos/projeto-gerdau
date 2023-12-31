import { useState } from 'react';
import './Home.css';
import Header from '../components/Header';
import ReactModal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import imagem1 from '../images/Aproximar_para_incluir.png'
import imagem2 from '../images/Gerdau_mais.png'
import imagem3 from '../images/O_aco_do_The_Town.png'
import CancelIcon from '@mui/icons-material/Cancel';
import StopIcon from '@mui/icons-material/Stop';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Home() {

  const slides = [
    {
      imagem: imagem1,
      titulo: 'Aproximar para incluir',
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim nisi, pellentesque lacinia aliquet nec, mollis eu nibh. Nulla facilisi. Donec et eros volutpat, rhoncus lorem sed, iaculis enim. Pellentesque eu purus sit amet quam consequat auctor ut ac felis. Nulla leo justo, commodo sit amet quam eu, tristique eleifend enim. Etiam venenatis in tellus in cursus. Phasellus imperdiet turpis et odio volutpat, in scelerisque urna congue. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."

    },
    {
      imagem: imagem2,
      titulo: 'Gerdau Mais',
      texto: 'Quisque pellentesque euismod dui, eu euismod enim luctus eget. In eu nunc felis. Nam scelerisque, magna vitae scelerisque fermentum, odio libero varius dui, quis tristique metus justo eget metus. Pellentesque vel orci vehicula, auctor nulla congue, lacinia sem. Nulla ultrices turpis quis bibendum convallis. Ut nec libero sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. '
    },
    {
      imagem: imagem3,
      titulo: 'O aço oficial do The Town',
      texto: 'Etiam pharetra, dui quis dapibus eleifend, nibh dolor tincidunt ex, ut porta risus metus ac est. Donec sit amet tempor ex. Curabitur a massa et quam varius feugiat. Nunc odio est, consectetur non ultrices eu, placerat id arcu. Cras blandit est sit amet sodales venenatis. Sed nec cursus neque. Aenean erat quam, placerat ultrices dignissim ut, sagittis a sapien. Pellentesque eu justo sit amet purus finibus bibendum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.'
    }

  ]

  const [modalIsOpen, setIsOpen] = useState(false);
  const [imagem, setImagem] = useState('');
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [play, setPlay] = useState(false)

  function openCloseModal(imagem, titulo, texto) {
    setIsOpen(!modalIsOpen)
    setImagem(imagem)
    setTitulo(titulo)
    setTexto(texto)
  }

  return (
    <>
      <Header />
      <div className="App">
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={openCloseModal}
          contentLabel="Modal de exemplo"
          closeTimeoutMS={500}
          className='modal'
          style={{
            content: {
              backgroundImage: `linear-gradient(to bottom, transparent 0%, #fff 50%), url('${imagem}')`
            }
          }}
        >
          <CancelIcon
            sx={{ color: '#091423', fontSize: 40, cursor: 'pointer' }}
            onClick={() => openCloseModal('')}
          />
          {play
            ? <div className='playStop'>
              <h2>Clique para parar:</h2>
              <button className='button'>
                <StopIcon
                  sx={{ fontSize: 80, cursor: 'pointer', color: '#091423' }}
                  onClick={() => setPlay(!play)}
                />
              </button >
            </div>
            : <div className='playStop'>
              <h2>Clique para reproduzir:</h2>
              <button className='button'>
                <PlayArrowIcon
                  sx={{ fontSize: 80, cursor: 'pointer', color: '#091423' }}
                  onClick={() => setPlay(!play)}
                />
              </button>
            </div>}

          <h1 className='titulo'>{titulo}</h1>
          <p className='texto'>{texto}</p>
        </ReactModal>

        <h1 className='tituloHome'>Veja nossos projetos:</h1>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          // loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 3,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          style={{ zIndex: 0 }}
        >
          {slides.map((item) => (
            <SwiperSlide
              onClick={() => openCloseModal(item.imagem, item.titulo, item.texto)}
            >
              <img src={item.imagem} alt='Thumbnail' />
            </SwiperSlide>

          ))}
        </Swiper>

      </div >
    </>
  );
}
