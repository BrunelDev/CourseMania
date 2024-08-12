import { useState } from 'react';
export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        backgroundColor: liked ? 'red' : 'gray',
        color: 'white',
        width:'24px',
        height:'24px',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
      }}
    >
      {liked ? 'e' : 'i'}
    </button>
  );
}
