"use client";

import { FC, useEffect, useState } from "react";
import EmbedModal from "../modals/embed-modal";
import FeedbackModal from "../modals/feedback-modal";
import SubjectListModal from "../modals/subject-list-modal";
import SubjectViewModal from "../modals/subject-view-modal";

interface ModalProviderProps {}

const ModalProvider: FC<ModalProviderProps> = ({}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <EmbedModal />
            <SubjectListModal />
            <SubjectViewModal />
            <FeedbackModal />
        </>
    );
};

export default ModalProvider;