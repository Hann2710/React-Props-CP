import "./App.css";
import Profile from "./Profile/Profile";
import ProfilePic from "./Profile/propic.jpg";
function App() {
  const handleName = (x) => {
    alert(x);
  };
  return (
    <div>
      <Profile
        fullName={"Daâbek Hana"}
        bio={
          "a FullStack JS Student at Go My Code, hoping to be one of the biggest developpers on this planet"
        }
        proFession={"futur web developper"}
        func={handleName}
      >
        <img
          src={ProfilePic}
          alt="profilepic"
          style={{ width: "300px", border: "3px solid palevioletred" }}
        />
      </Profile>
    </div>
  );
}

export default App;
