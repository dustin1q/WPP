import parseSampleData from '../utils/parseSampleData.js'
import { getCollection} from 'astro:content';


function getCollectionSample(collectionID) {
    // Render post... 
    return sampleData = new parseSampleData(sample.body)
}

    export const getStaticPaths = async() => {
    const codeSamples = await getCollection(collectionID);
        return codeSamples.map(sample=> ({
                params: {slug:sample.slug},
                props: {sample}
            
        }));
    }

export default getCollectionSample