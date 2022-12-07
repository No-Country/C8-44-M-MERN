import { AiFillCamera } from 'react-icons/ai';

interface Props {
  image: string;
  fn: (ele: any) => void;
}

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
    <div className="mb-3 relative">
      <img
        src={image}
        alt="Profile picture"
        className="h-16 w-16 object-cover rounded-full relative"
      />
      <label htmlFor="file-input" className="custom-file-input">
        <AiFillCamera />
      </label>
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
