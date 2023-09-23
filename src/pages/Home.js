import { useState } from 'react';
import './Home.css';
import Header from '../components/Header';
import ReactModal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import imagem1 from '../images/Aproximar_para_incluir.png'
import imagem2 from '../images/Gerdau_mais.png'
import imagem3 from '../images/O_aco_do_The_Town.png'
import CancelIcon from '@mui/icons-material/Cancel';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

import { EffectCards } from 'swiper/modules';

export default function Home() {

  const slides = [
    {
      imagem: imagem1,
      titulo: 'Aproximar para incluir',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim nisi, pellentesque lacinia aliquet nec, mollis eu nibh. Nulla facilisi. Donec et eros volutpat, rhoncus lorem sed, iaculis enim. Pellentesque eu purus sit amet quam consequat auctor ut ac felis. Nulla leo justo, commodo sit amet quam eu, tristique eleifend enim. Etiam venenatis in tellus in cursus. Phasellus imperdiet turpis et odio volutpat, in scelerisque urna congue. '
    },
    {
      imagem: imagem2,
      titulo: 'Gerdau Mais',
      texto: 'Quisque pellentesque euismod dui, eu euismod enim luctus eget. In eu nunc felis. Nam scelerisque, magna vitae scelerisque fermentum, odio libero varius dui, quis tristique metus justo eget metus. Pellentesque vel orci vehicula, auctor nulla congue, lacinia sem. Nulla ultrices turpis quis bibendum convallis. Ut nec libero sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.  '
    },
    {
      imagem: imagem3,
      titulo: 'O aço oficial do The Town',
      texto: 'Etiam pharetra, dui quis dapibus eleifend, nibh dolor tincidunt ex, ut porta risus metus ac est. Donec sit amet tempor ex. Curabitur a massa et quam varius feugiat. Nunc odio est, consectetur non ultrices eu, placerat id arcu. Cras blandit est sit amet sodales venenatis. Sed nec cursus neque. Aenean erat quam, placerat ultrices dignissim ut, sagittis a sapien. Pellentesque eu justo sit amet purus finibus bibendum. Quisque sed ipsum quis ex volutpat lobortis vitae ac erat.'
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
              backgroundImage: `linear-gradient(to bottom, transparent 0%, #fff 60%), url('${imagem}')`
            }
          }}
        >
          <CancelIcon
            sx={{ color: '#036', fontSize: 40, cursor: 'pointer' }}
            onClick={() => openCloseModal('')}
          />
          {play
            ? <div className='playStop'>
              <StopCircleOutlinedIcon
                sx={{ fontSize: 80, cursor: 'pointer', color: '#091423' }}
                onClick={() => setPlay(!play)}
              />
            </div>
            : <div className='playStop'>
              <PlayCircleFilledWhiteOutlinedIcon
                sx={{ fontSize: 80, cursor: 'pointer', color: '#091423'  }}
                onClick={() => setPlay(!play)}
              />
            </div>}

          <h1 className='titulo'>{titulo}</h1>
          <p>{texto}</p>
        </ReactModal>

        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          style={{ zIndex: 0 }}
        >
          {slides.map((item) => (
            <SwiperSlide
              style={{ backgroundImage: `url(${item.imagem})` }}
              onClick={() => openCloseModal(item.imagem, item.titulo, item.texto)}
            />

          ))}
        </Swiper>

      </div >
    </>
  );
}
