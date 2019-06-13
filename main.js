updateSubs()
setInterval(() => {
  updateSubs()
}, 10000)

async function updateSubs() {
  let pewdiepieSubscriptionsElement = document.querySelector('.pew-subs')

  const key = config.key
  const subscriptionMilestone = config.subscriptionMilestone

  document.querySelector('.subs-milestone').innerHTML = subscriptionMilestone.toLocaleString('en-us')

  const reqUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=PewDiePie&key=${key}`

  const response = await fetch(reqUrl)
  const data = await response.json()

  let pewdiepieSubscriptions = parseInt(data.items[0].statistics.subscriberCount)

  pewdiepieSubscriptionsElement.innerHTML = pewdiepieSubscriptions.toLocaleString('en-US')

  subscriptionsLeft = subscriptionMilestone - pewdiepieSubscriptions

  if (subscriptionsLeft < 0)
    subscriptionsLeft = `We reached ${subscriptionMilestone.toLocaleString('en-us')}`
  else
    subscriptionsLeft = subscriptionsLeft.toLocaleString('en-US')

  let subscriptionsLeftElement = document.querySelector('.subs-left')

  subscriptionsLeftElement.innerHTML = subscriptionsLeft
}