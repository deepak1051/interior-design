import Card from '../card/Card';
import './content.css';

const imgArray1 = [
  {
    title: 'Turnkey Interiors Contractor',
    url: '/images/services/Turkey Interior contractors.webp',
    path: '/services/turnkey-interior',
  },
  {
    title: 'Interior Design Consultant',
    url: '/images/services/Interior Design Consultant.webp',
    path: '/services/interior-design',
  },
  {
    title: 'Gypsum False Ceiling Contractor',
    url: '/images/services/Gypsum False ceiling contractor.webp',
    path: '/services/gypsum-false',
  },
];

const imgArray2 = [
  {
    title: 'Corporate Office Interior Contractor',
    url: '/images/services/corporate office interior contractor.webp',
    path: '/services/corporate-office',
  },
  {
    title: 'Office Furniture',
    url: '/images/services/Office Furniture.webp',
    path: '/services/office-furniture',
  },
  {
    title: 'Gypsum Partition Contractor',
    path: '/services/gypsum-partition',
    url: '/images/services/Gypsum Partition Contractor.webp',
  },
];
const Content = () => {
  return (
    <div className="content container">
      <h2 style={{ textAlign: 'center', color: 'black' }}>Our Services</h2>
      <hr />
      <div className="content-cards">
        {imgArray1.map((item) => {
          return (
            <div key={item.title}>
              <Card title={item.title} url={item.url} path={item.path} />
            </div>
          );
        })}
      </div>
      <div className="content-cards">
        {imgArray2.map((item) => {
          return (
            <div key={item.title}>
              <Card title={item.title} url={item.url} path={item.path} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
