import Form from '../../src/components/Form'
import Video from '../../src/components/Video'


export default function Home() {
  return (
    <main>
        <List titulo={"Lista 1"} />
        <List titulo={"Lista 2"} />
        <Video />
        <Form />
    </main>
  )
}