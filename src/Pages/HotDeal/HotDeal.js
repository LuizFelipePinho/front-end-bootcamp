import { useEffect, useState } from "react";
import "./HotDeal.css";

export default function HotDeal({ days = 0, hours = 0, minutes = 0, seconds = 0 }) {
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({
    days: parseInt(days),
	hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds)
  });

  const tick = () => {
    if ( over) return;
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0)
      setOver(true);
    else if (time.minutes === 0 && time.seconds === 0)
      setTime({
		days: time.days,  
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59
      });
    else if (time.seconds === 0)
      setTime({
		days: time.days,  
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59
      });
    else
      setTime({
	    days: time.days,
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1
      });
  };

  const reset = () => {
    setTime({
	  days: parseInt(days),
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds)
    });
    setOver(false);
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });
	return (
		<div>
			<div id="hot-deal" class="section">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="hot-deal">
								<ul class="hot-deal-countdown">
									<li>
										<div>
		                					<h3>{`${time.days
                                               .toString()
                                               .padStart(2, "0")}`}
											   </h3>
											<span>Days</span>
										</div>
									</li>
									<li>
										<div>
											<h3>{`${time.hours
                                               .toString()
                                               .padStart(2, "0")}`}</h3>
											<span>Hours</span>
										</div>
									</li>
									<li>
										<div>
											<h3>{`${time.minutes
                                               .toString()
                                               .padStart(2, "0")}`}</h3>
											<span>Mins</span>
										</div>
									</li>
									<li>
										<div>
											<h3>{`${time.seconds
                                               .toString()
                                               .padStart(2, "0")}`}</h3>
											<span>Secs</span>
										</div>
									</li>
								</ul>
								<h2 class="text-uppercase">
									hot deal this week
								</h2>
								<h3>
									Order $25 or more to qualify for free shipping
								</h3>
								<span class="badge rounded-pill bg-danger">
									SHOP NOW!{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
