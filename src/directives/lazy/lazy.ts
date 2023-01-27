export default {
    mounted(el: Element, binding: { value: string }) {
        const observer = () => {
            const io = new IntersectionObserver((entries) => {
                entries.forEach((item: IntersectionObserverEntry) => {
                    if (item.isIntersecting) {
                        const target = item.target as HTMLImageElement;
                        // 可见
                        target.src = binding.value;
                        io.unobserve(target); // 取消观察
                    }
                });
            });
            //观察dom
            io.observe(el);
        };
        observer();
    },
};
