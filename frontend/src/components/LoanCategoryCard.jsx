// src/components/LoanCategoryCard.js
const LoanCategoryCard = ({ title, subcategories }) => (
    <div className="card">
      <h3>{title}</h3>
      <ul>
        {subcategories.map(sub => <li key={sub}>{sub}</li>)}
      </ul>
    </div>
  );
export default LoanCategoryCard;  