import Prismic from '@prismicio/client';

export function getPrismicClient(req?: un){
  const prismic = Prismic.client('https://site-institucional.cdn.prismic.io/api/v2',{
    req,
  })

  return prismic;
}