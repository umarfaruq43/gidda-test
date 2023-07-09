import Login from "@/components/Forms/Login";
import ScreenSize from "@/Layout/ScreenSize";
import { Box } from "@chakra-ui/react";
const login = () => {
    return (
        <ScreenSize>
            {" "}
            <Login />{" "}
        </ScreenSize>
    );
};

export default login;
