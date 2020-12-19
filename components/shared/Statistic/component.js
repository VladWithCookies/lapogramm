import clsx from 'clsx';

import TweenOne from 'lib/tweenOne';

const Statistic = ({
  value,
  prefix,
  className,
}) => (
  <div className={clsx('statistic', className)}>
    {prefix}
    <TweenOne
      className="ml-10"
      animation={{
        duration: 1000,
        Children: {
          value,
          floatLength: 0,
        },
      }}
    >
      0
    </TweenOne>
  </div>
);

export default Statistic;
