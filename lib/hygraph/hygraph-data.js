import hygraphClient, { gql } from "./hygraph-client";

export const hygraphDataHome = () => {
  return hygraphClient.request(
    gql`
      query Home {
        listProductsFlashSale: products(first: 4) {
          id
          images {
            height
            width
            url
          }
          name
          price
        }
        listProductsBestSeller: products {
          id
          images {
            height
            width
            url
          }
          name
          price
        }
        listCategories: categories {
          id
          name
          slug
          images {
            id
            fileName
            url
          }
        }
        listBanners: banners {
          id
          linkRedirect
          image {
            fileName
            url
          }
        }
      }
    `
  );
};

export const hygraphDataProducts = () => {
  return hygraphClient.request(
    gql`
      query Products {
        listProducts: products {
          id
          images {
            height
            width
            url
          }
          name
          price
        }
      }
    `
  );
};
