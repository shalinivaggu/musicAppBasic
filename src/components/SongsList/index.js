import {List, Image, Button, InsideDiv} from './styledComponents'

const SongsList = props => {
  const {value, deleteItem} = props
  const {id, duration, genre, imageUrl, name} = value
  const onClickDelete = () => {
    deleteItem(id)
  }
  return (
    <List>
      <InsideDiv>
        <Image src={imageUrl} alt="track" />
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </InsideDiv>
      <InsideDiv>
        <p>{duration}</p>
        <Button type="button" data-testid="delete" onClick={onClickDelete}>
          delete
        </Button>
      </InsideDiv>
    </List>
  )
}
export default SongsList
