import Header from "../components/Header/Header";
const NotFoundPage = () => {
  return (
    <div
      className="page-container"
      style={{
        textAlign: "center",
        minHeight: "calc(100vh - 200px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <p>
        You might want to return to the{" "}
        .
      </p>
    </div>
  )
}
export default NotFoundPage;
