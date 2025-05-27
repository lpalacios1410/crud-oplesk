export const initialUsers = () => {
    const savedUsers = localStorage.getItem('crudUsers');
    return savedUsers ? JSON.parse(savedUsers) : [];
  };

export const saveToLocalStorage = (usersArray) => {
    localStorage.setItem('crudUsers', JSON.stringify(usersArray));
  };
