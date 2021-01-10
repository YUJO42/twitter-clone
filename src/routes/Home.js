import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import Nweet from 'components/Nweet';

const Home = ({ userObj }) => {
  const [nweet, seteNweet] = useState('');
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    dbService.collection('nweets').onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService
      .collection('nweets')
      .add({ text: nweet, createdAt: Date.now(), ceratorId: userObj.uid });

    seteNweet('');
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    seteNweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What~s on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.ceratorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
