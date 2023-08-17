import React from 'react'
import Main from '../components/Main'
import requests from '../Requests'
import Row from '../components/Row'

const Home = () => {
  return (
    <>
    <Main />
        <Row rowID='0' title='Now Playing' fetchURL={requests.requestNowPlaying} />
        <Row rowID='1' title='Trending Now' fetchURL={requests.requestTrending} />
        <Row rowID='3' title='UpComing' fetchURL={requests.requestUpcoming} />
        <Row rowID='4' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='5' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowID='6' title='Horror' fetchURL={requests.requestHorror} />
        <Row rowID='7' title='TV Trending' fetchURL={requests.requestTvTrending} />
        
        
 </>
  )
}

export default Home