const TodoLayout = ({ children }: { children: React.ReactNode }) => {
  /*
    nếu như không sử dụng children thì trình duyệt sẽ chỉ hiện mỗi nội dung bên trong layout.tsx
    mà không hiện nội dung bên trong page.tsx để thực hiện điều đó ta sử dụng children 
    */
  /*
    Khai báo children với type của children là React.ReactNode như bên trên
    */
  return (
    <div>
      <h1>Todo Layout</h1>
      {children}//Todo Page (nội dung bên page.tsx của Route todo)
    </div>
  );
};
export default TodoLayout;
