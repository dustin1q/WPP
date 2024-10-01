import { getCollection } from "astro:content";

async function getSamples() {
 const htmlSamples = (await getCollection("nativeHTML"));
 const cssSamples = (await getCollection("nativeCSS"));
 const jsSamples = (await getCollection("nativeJS"));
 const uiAccelerators = (await getCollection("uiAccelerators"));
 const uiPlayground = (await getCollection("uiPlayground"));
 const layoutExamples = (await getCollection("layoutExamples"));
 

 let samples = cssSamples.concat(htmlSamples, jsSamples, uiAccelerators, uiPlayground, layoutExamples);

 return samples.map((sample) => ({
  slug: sample.slug,
  title: sample.data.title,
  cat: sample.data.cat,
  desc: sample.data.desc
 }));
 //return samples;
}

//For a simple json feed

//json = JSON.stringify(json);


export async function GET({}) {
  return new Response(JSON.stringify(await getSamples()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

