const styles = `
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #343a40;
    color: #f8f9fa;
}

.App {
    padding: 40px;
    max-width: 900px;
    margin: 0 auto;
    background-color: #212529;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

h1 {
    text-align: center;
    color: #0d6efd;
    margin-bottom: 40px;
    font-weight: 700;
}

p {
    color: #ced4da;
}

.custom-card {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #0d6efd;
    border-radius: 4px;
    background-color: #495057;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease;
}

.custom-input,
.custom-checkbox,
.custom-button,
.custom-tooltip,
.custom-modal {
    margin-bottom: 20px;
}

.custom-tooltip span {
    color: #0d6efd;
    cursor: pointer;
}

.content section {
    margin-bottom: 40px;
}


`;

const applyStyles = () => {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
};

export default applyStyles;
