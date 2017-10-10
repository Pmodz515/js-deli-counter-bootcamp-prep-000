function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return 'Welcome, '+ name +'. You are number ' + katzDeliLine.length + ' in line.'
}

function nowServing(katzDeliLine){
  var name = katzDeliLine.shift()
  if (name === undefined) {
    return 'There is nobody waiting to be served!'
  } else {
    return 'Currently serving ' + name + '.'
  }
}