import React, { useEffect, useRef, useState } from 'react';

const intersectionObserver = <P extends object>(
    WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
    return (props: P) => {
        const [isVisible, setIsVisible] = useState(false);
        const ref = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsVisible(true);
                        } else {
                            setIsVisible(false);
                        }
                    });
                },
                { threshold: .8 } // Adjust the threshold as needed
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, []);

        return (
            <div ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default intersectionObserver;