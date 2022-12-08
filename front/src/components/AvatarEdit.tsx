import { AiFillCamera } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Props {
  image: string;
  fn: (ele: any) => void;
}
const lg = window.screen.width > window.screen.height;

function AvatarCard({ image, fn }: Props) {
  const handleFile = ({ target }: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        fn(String(reader.result));
      }
    };
    reader.readAsDataURL(target.files[0]);
  };

  return (
    <div className="mb-3 relative ">
      <div
        className={` rounded-full border-2 overflow-hidden ${
          !lg ? 'h-16 w-16' : 'h-28 w-28'
        }`}
      >
        <LazyLoadImage
          src={image}
          alt="Profile picture"
          className={`object-cover  relative h-28 w-28`}
          effect="blur"
        />
      </div>
      {/* <label htmlFor="file-input" className="custom-file-input">
        <AiFillCamera />
      </label> */}
      <input
        type="file"
        id="file-input"
        accept="/image/*"
        onChange={handleFile}
        className="file-input"
      />
    </div>
  );
}

export default AvatarCard;
