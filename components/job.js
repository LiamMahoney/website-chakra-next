import {
    Flex
} from "@chakra-ui/react";
import JobEmployer from "./job_employer";
import JobPosition from "./job_position";

export default function Job({children, employer, yearSpan}) {
    return (
        <Flex direction="column" paddingLeft={{md: 4}}>
            <JobEmployer name={employer} yearSpan={yearSpan} />
            {children}
        </Flex>
    );
}