import style from "../css/Team.module.css";
function Team() {
  return (
    <>
      <h1>Our Teams</h1>
      <div className={style.teamMember}>
        <div className={`${style.member} ${style.member1}`} name="himanshu"></div>
        <div className={`${style.member} ${style.member2}`} name="shivam"></div>
        <div className={`${style.member} ${style.head}`} name="raj"></div>
        <div className={`${style.member} ${style.member3}`} name="mithun"></div>
        <div className={`${style.member} ${style.member4}`} name="jitesh"></div>
      </div>
    </>
  );
}

export default Team;
