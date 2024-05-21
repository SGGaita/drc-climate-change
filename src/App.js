import { ApolloProvider } from "@apollo/client";
import { AboutPage, CommunityEngagement, ContactUsPage, CountInitiatives, HomePage, NewsPage, ResourcesPage } from "./pages";
import client from "./utils/apollo/client";
import { useEffect, useState } from "react";
import { GET_MENUS } from "./utils/queries/get-menus";
import { Route, Routes } from 'react-router-dom'
import { Layout } from "./layout/Layout";



function App() {

  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      //const client = /* ... Apollo Client setup ... */; // Assuming you have Apollo Client setup
      const { data } = await client.query({ query: GET_MENUS });
      console.log("test data", data)
      setMenuData(data?.headerMenus?.edges);
    };

    fetchData();
  }, []); // Empty dependency array: Fetch data only on initial mount

  return (

    <ApolloProvider client={client}>
      <Layout menuData={menuData}>
      <Routes>
        <Route exact path="/" element={<HomePage  />} />
        <Route path="/home" element={<HomePage  />} />
        <Route path="/about-the-hub" element={<AboutPage/>}/>
        <Route path="/initiatives" element={<CountInitiatives/>}/>
        <Route path="/community-engagements" element={<CommunityEngagement/>}/>
        <Route path="/resources" element={<ResourcesPage/>}/>
        <Route path="/news-media" element={<NewsPage/>}/>
        <Route path="/contact-us" element={<ContactUsPage/>}/>
      </Routes>
      </Layout>
      
    </ApolloProvider>


  );
}

export default App;
