/* eslint-disable no-unused-vars */
// src/components/Terms.jsx
import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Terms = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                        >
                            <FaTimes size={20} />
                        </button>

                        {/* Terms and Conditions Content */}
                        <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>

                        <div className="space-y-4 text-gray-700">
                            <p>
                                <strong>Introduction</strong> <br />
                                Welcome to the website of Kwame Akuffo &amp; Co. Unlimited. By
                                accessing and using this website, you agree to comply with these
                                Terms and Conditions. If you do not agree, please discontinue
                                use immediately.
                            </p>

                            <p>
                                <strong>Informational Purposes Only</strong> <br />
                                The materials and content provided on this website are for
                                general informational purposes. They do not constitute legal
                                advice, nor do they replace consultation with a qualified
                                lawyer.
                            </p>

                            <p>
                                <strong>No Attorney–Client Relationship</strong> <br />
                                Use of this website or communication with our firm through
                                contact forms, email, or other channels does not create an
                                attorney–client relationship. A formal engagement is established
                                only upon signing a written agreement with Kwame Akuffo &amp;
                                Co. Unlimited.
                            </p>

                            <p>
                                <strong>Confidentiality of Communications</strong> <br />
                                Information transmitted through this website, including forms or
                                email, is not considered confidential until a formal engagement
                                is confirmed. Do not send sensitive information unless
                                instructed to do so by a member of our team.
                            </p>

                            <p>
                                <strong>Intellectual Property Rights</strong> <br />
                                All content on this website, including text, images, graphics,
                                and design, is the property of Kwame Akuffo &amp; Co. Unlimited
                                unless otherwise stated. You may not copy, reproduce, or
                                distribute any content without prior written consent.
                            </p>

                            <p>
                                <strong>Limitation of Liability</strong> <br />
                                Kwame Akuffo &amp; Co. Unlimited makes reasonable efforts to
                                ensure that the content on this website is accurate and up to
                                date. However, we do not accept liability for errors, omissions,
                                or reliance on the information provided herein.
                            </p>

                            <p>
                                <strong>Third-Party Links</strong> <br />
                                This website may contain links to third-party websites. Kwame
                                Akuffo &amp; Co. Unlimited is not responsible for the content,
                                accuracy, or practices of such external sites.
                            </p>

                            <p>
                                <strong>Governing Law and Jurisdiction</strong> <br />
                                These Terms and Conditions are governed by the laws of the
                                Republic of Ghana. Any disputes arising in connection with this
                                website shall be subject to the exclusive jurisdiction of the
                                courts of Ghana.
                            </p>

                            <p>
                                <strong>Updates to Terms</strong> <br />
                                We may update or modify these Terms and Conditions from time to
                                time without prior notice. Users are encouraged to review them
                                periodically.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

Terms.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Terms;
