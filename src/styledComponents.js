import styled from 'styled-components'

export const Background = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 20px;
  color: #ffffff;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-around;
`
export const InputDiv = styled.div`
  align-self: center;
`
export const SongList = styled.div`
  background-color: #152850;
  height: 60vh;
  color: #ffffff;
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  overflow-y: auto;
  height: 50vh;
`
export const NoSongs = styled.h1`
  text-align: center;
`
