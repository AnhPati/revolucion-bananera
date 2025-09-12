import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { theme } from "@/theme/theme";

export const AdminToast = () => {
    return (
        <AdminToastStyled>
            <ToastContainer className="toaster" bodyClassName="body-toast" />
        </AdminToastStyled>
    )
}

const AdminToastStyled = styled.div`
    .toaster {
        max-width: 300px;
    }

    .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
        background: ${theme.colors.background_dark};
    }

    .body-toast {
        .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
        margin-right: ${theme.spacing.md};
        margin-left: 5px;
        }

        div {
        line-height: 1.3em;
        }

        svg {
        color: #3498DB;
        }
    }
`;