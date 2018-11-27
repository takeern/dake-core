import {IJsonConfig, IParseJson} from '../interface/jsonConfig'

export default function parseJson (jsonConfig: IJsonConfig):IParseJson {
    let json:IParseJson = {
        css: [],
        js: [],
    };

    jsonConfig.filename.map(item => {
        if(!jsonConfig.isAbsolutePath) {
           item = jsonConfig.publicPath + '/' + item;
        } 
        if(item.match(/\.(js)$/)) {
            json.js.unshift(item);
        }
        if(item.match(/\.(css)$/)) {
            json.css.unshift(item);
        }
    })
    
    return json;
}