import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";

const Home = () => {
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [paginationno, setPaginationno] = useState(0);


  const getTrendingData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=d3ccacc37598c63c0097decf085283a4&page=${pageno}`
    );
    setContent(data.results);
    // console.log(data)
    setPaginationno(data.total_pages)
  };
 useEffect(()=>{
  getTrendingData();
 }, [])
 
 const handleClick = (number)=>{
   setPageno(number);
  }
  
 useEffect(()=>{
  getTrendingData();
 }, [pageno])


  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col className="col-md-12">
            <section>
              <h1 className="txtCenter">Top Trending</h1>
              <h3 className="txtCenter">Tv and Movies For You</h3>
            </section>
          </Col>
          {
            content && content.length > 0 ? content.map((item)=>{
              return(
              <Card key={item.id} data={item} mediaType="tv" />
              )
            }) : "content loading"
          }
          {
            paginationno && paginationno > 1 ? <Pagination maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
          }
        </Row>
      </Container>
    </main>
  );
};

export default Home;
