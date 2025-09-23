import { getCollection, type CollectionEntry } from "astro:content";
import { ImageResponse } from '@vercel/og';

export async function getStaticPaths() {
	const movements: CollectionEntry<'movements'>[] =
		await getCollection('movements');
	return movements.map((movement) => ({
		params: { slug: movement.slug },
		props: { movement: movement },
	}));
}
interface Props {
  params: { slug: string };
  props: { movement: CollectionEntry<'movements'> };
}


export async function GET({ params, props }: Props) {
  const { slug } = params;
  const { movement } = props;
  
  if (slug === undefined) {
    throw new Error("Slug is required");
  }

  const html = {
    type: 'div',
    props: {
      children: [
        {
          type: 'div',
          props: {
            tw: 'pl-10 shrink flex',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'text-6xl text-gray-300 font-inter',
                  style: {
                    // fontFamily: 'DM Sans Bold',
                    letterSpacing: '-0.07em'
                  },
                  children: movement.data.title,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            tw: 'absolute right-[40px] top-[40px] flex items-center font-satoshi',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'text-gray-500 text-3xl ',
                  // style: {
                  //   fontFamily: 'DM Sans Bold',
                  // },
                  children: 'Crosstraining Wiki',
                },
              },
              // {
              //   type: 'div',
              //   props: {
              //     tw: 'text-3xl text-yellow-500',
              //     style: {
              //       fontFamily: 'DM Sans Bold',
              //     },
              //     children: '@rsdiaz',
              //   },
              // },
            ],
          },
        },
      ],
      tw: 'w-full h-full flex items-center justify-center relative px-22 font-satoshi',
      style: {
        background: '#0c1221',
        // fontFamily: 'DM Sans Regular',
      },
    },
  };
  
  return new ImageResponse(html, {
    width: 1200,
    height: 630,
  });
}