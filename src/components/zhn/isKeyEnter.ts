
type EventType = {
  keyCode: number
}
type IsKeyEnterType = {
 (event: EventType): boolean
}

const isKeyEnter: IsKeyEnterType = ({ keyCode }) => keyCode === 13 || keyCode === 32;
export default isKeyEnter
