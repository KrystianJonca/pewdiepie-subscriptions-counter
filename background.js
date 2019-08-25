milestoneReached = false

setInterval(async () => {
  const key = config.key
  const subscriptionMilestone = config.subscriptionMilestone

  const reqUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=PewDiePie&key=${key}`

  const response = await fetch(reqUrl)
  const data = await response.json()

  let pewdiepieSubscriptions = parseInt(data.items[0].statistics.subscriberCount)

  subscriptionsLeft = subscriptionMilestone - pewdiepieSubscriptions

  if (subscriptionsLeft < 0 && subscriptionsLeft > -25000 && milestoneReached == false) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "img/icon_128.png",
      title: `Pewdiepie has reached ${subscriptionMilestone.toLocaleString('en-us')}`,
      message: `Pewdiepie has reached ${subscriptionMilestone.toLocaleString('en-us')}. We have to celebrate!`
    })
    milestoneReached = true
  }
}, 300000);