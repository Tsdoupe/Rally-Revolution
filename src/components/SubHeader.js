import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';

const SubHeader = ({ current, detail }) => {
  const location = useLocation();

  const generateSecondBreadcrumb = () => {
    if (location.pathname.includes('/mens')) {
      return <Link to='/mens'>Mens</Link>;
    } else if (location.pathname.includes('/womens')) {
      return <Link to='/womens'>Womens</Link>;
    } else if (location.pathname.includes('/newreleases')) {
      return <Link to='/newreleases'>New Releases</Link>;
    } else {
      return null;
    }
  };

  return (
    <Row>
      <Col>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/'>Home</Link>
          </BreadcrumbItem>
          {detail && generateSecondBreadcrumb() && (
            <BreadcrumbItem>{generateSecondBreadcrumb()}</BreadcrumbItem>
          )}
          <BreadcrumbItem active> {current} </BreadcrumbItem>
        </Breadcrumb>
        <h2> {current} </h2>
        <hr />
      </Col>
    </Row>
  );
};

export default SubHeader;

// import {Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import {Link} from 'react-router-dom';

// const SubHeader = ({ current, detail }) => {
//     return (
//         <Row>
//             <Col>
//                 <Breadcrumb>
//                     <BreadcrumbItem>
//                         <Link to='/'> Home </Link>
//                     </BreadcrumbItem>
//                     {detail && (
//                         <BreadcrumbItem>
//                             <Link to='/mens'> Mens </Link>
//                             {/* <Link to='/womens'> Womens </Link>
//                             <Link to='/newreleases'> New Releases</Link> */}
//                         </BreadcrumbItem>
//                     )}
//                     <BreadcrumbItem active> {current} </BreadcrumbItem>
//                 </Breadcrumb>
//                 <h2> {current} </h2>
//                 <hr />
//             </Col>
//         </Row>
//     )
// };

// export default SubHeader;