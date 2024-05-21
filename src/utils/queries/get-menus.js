import { gql } from '@apollo/client';
import MenuFragment from '../fragments/menus';

/**
 * This query fetches menu items for both the header and footer locations.
 * 
 * It utilizes the `MenuFragment` fragment to avoid code duplication 
 * for retrieving menu item details.
 */
export const GET_MENUS = gql`
query GET_MENUS {
  # Fetches header menu items (location: PRIMARY, parent: root)
  headerMenus: menuItems(where: {location: PRIMARY, parentId: "0"}) {
    edges {
      node {
        # Retrieve details using the MenuFragment
        ...MenuFragment
        # Nested child menu items
        childItems {
          edges {
            node {
              # Retrieve details using the MenuFragment
              ...MenuFragment
            }
          }
        }
      }
    }
  }
  # Fetches footer menu items (location: FOOTER, parent: root)
  footerMenus: menuItems(where: {location: FOOTER, parentId: "0"}) {
    edges {
      node {
        # Retrieve details using the MenuFragment
        ...MenuFragment
      }
    }
  }
}

# Include the MenuFragment definition here
${MenuFragment}
`;
 