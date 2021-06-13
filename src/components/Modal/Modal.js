import { useEffect } from 'react';
import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

export const Modal = ({ close }) => {
  const ref = useRef();
  useEffect(() => {
    const handleClose = (e) => {
      if (e.key === 'Escape') {
        console.log('Modal');
        close();
      }
    };
    document.body.addEventListener('keydown', handleClose);
    return () => {
      document.body.removeEventListener('keydown', handleClose);
    };
  }, []);
  useEffect(() => {
    if (!ref) return;
    ref.current.focus();
  }, [ref]);
  return (
    <div onClick={close} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal__content">
        <video className="modal__video" controls>
          <source src="/videos/bunny.mp4" type="video/mp4" />
        </video>
        <button
          ref={ref}
          className="modal__close"
          onClick={close}
          aria-label="close popup"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              close();
            }
          }}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
