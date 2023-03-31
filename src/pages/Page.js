import Header from '../header/Header';
import Intro from '../intro/Intro';
import Ability from '../ability/ability';


function Page({pageContentIndex,load}) {
    let innerPage = null
    switch (pageContentIndex) {
        case 0:
            innerPage = (<Header load={load}/>)
            break;
        case 1:
            innerPage = (<Intro load={load}/>)
            break;
        case 2:
            innerPage = (<Ability load={load}/>)
            break;
        default:
            innerPage = (<div>{pageContentIndex}</div>)
            break;
    }
    
    return (
        <div className="page">
            {innerPage}
        </div>
    )
}

export default Page