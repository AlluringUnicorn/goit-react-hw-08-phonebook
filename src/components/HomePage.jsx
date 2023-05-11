import css from './HomePage.module.css'


export const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.heading} >Welcome to ContactsApp</h1>
      <p className={css.p}>Keep all your contacts in one place</p>
    </div>
  );
};
