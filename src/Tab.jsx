import { useState } from "react";

const Tab = ({tab}) => {
    const {category_id,category} = tab;
    // console.log(category_id);

    const [id,setId] = useState('')
    console.log(id);
    // console.log(tab);
    const tabhandle = () => {
        setId(category_id)
    }
    return (
        <div>
            <div className=" text-center my-3">
                <button onClick={tabhandle} className="btn rounded-none mx-1 w-3/4">{category}</button>
            </div>
        </div>
    );
};

export default Tab;