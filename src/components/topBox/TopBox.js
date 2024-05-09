import "./topBox.scss";
import { topDealUsers } from "@/components/data.js";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Key Metrics</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <div className="userTexts">
                <span className="username">{user.username}</span>
              </div>
            </div>
            <span className="amount">{user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
