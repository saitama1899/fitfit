import styled from "styled-components";

const RoutineWrapper = styled.div`
  width: 100%;

  .exercise {
    margin: 0 auto;
    font-family: Georgia, 'Times New Roman', Times, serif;
    height: 100%;

    .image-description-container {
      position: relative;
      width: 100%;
      height: 300px; /* Alto fijo para todas las imágenes */
      margin: 0 auto; /* Centrar el contenedor */

      img {
        width: 100%; /* La imagen ocupa todo el ancho disponible */
        height: 100%; /* Mantiene la altura fija */
        object-fit: cover; /* Asegura que la imagen cubra el área del contenedor sin distorsionarse */
        display: block;
      }

      .description {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        p {
          padding: 0 24px;
          text-align: justify;
        }
      }

      &:hover .description {
        opacity: 1;
      }
    }
    .details-container {
      padding: 6px;
      display: flex;
      gap: 28px;
      .details {
        width: 50%;
        p {
          margin: 8px 0;
          display: flex;
          border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
          justify-content: space-between;
          padding: 0px 4px 4px;
        }
      }
      .tools {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background: #f6f6f6c7;
        margin: 8px 0px;
        border-radius: 30px;
        border: 1px solid #a4a4a4;
        border-bottom: 3px solid #a4a4a4;
        min-height: 116px;
      }
    }
  }

  h4 {
    background-color: ${({ theme }) => theme.colors.dark};
    width: 100%;
    margin: 0 auto;
    padding: 5px 0;
    text-align: center;
    color: white;
    font-weight: 300;
  }
`;

export default RoutineWrapper;
