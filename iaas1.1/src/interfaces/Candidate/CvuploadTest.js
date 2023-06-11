import React from 'react'
import { createItem, getItems } from './functions';

const CvuploadTest = () => {

    const [item, setItem] = useState({ title: '', image: '' });
const [items, setItems] = useState([])



const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await createItem(item);
    setItems([...items, result]);
    }


    useEffect(() => {
        const fetchData = async () => {
        const result = await getItems();
        console.log('fetch data;m', result)
        setItems(result)
        }
        fetchData()
        }, [])

  return (
    <>
    
    <form action="" onSubmit={onSubmitHandler}>
    <input type="text" className="input-field"
    onChange={e => setItem({ ...item, title: e.target.value })}
    />
    <FileBase64
    type="file"
    multiple={false}
    onDone={({ base64 }) => setItem({ ...item, image: base64 })}
    />
    <div className="right-align">
    <button className="btn">submit</button>
    </div>
    </form>
    </>
    
  )
}

export default CvuploadTest